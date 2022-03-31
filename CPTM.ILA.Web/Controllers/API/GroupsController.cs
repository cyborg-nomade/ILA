﻿using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Security.Claims;
using System.Threading.Tasks;
using System.Web.Http;
using CPTM.ILA.Web.DTOs;
using CPTM.ILA.Web.Models;
using CPTM.ILA.Web.Models.AccessControl.VIEWS;
using CPTM.ILA.Web.Util;

namespace CPTM.ILA.Web.Controllers.API
{
    /// <summary>
    /// Controlador para grupos de acesso do sistema ILA.
    /// </summary>
    [RoutePrefix("api/groups")]
    public class GroupsController : ApiController
    {
        private readonly ILAContext _context;

        /// <inheritdoc />
        public GroupsController()
        {
            _context = new ILAContext();
        }

        /// <summary>
        /// Retorna departamentos, gerências e diretorias da estrutura organizacional da CPTM, a fim de servirem como grupos de acesso ao ILA.
        /// Endpoint disponibilizado para todos os usuários do ILA.
        /// </summary>
        /// <returns>
        /// Status da transação e um objeto JSON com chaves "diretorias", "gerencias" e "dptos", contendo listas de strings com os nomes das áreas da CPTM.
        /// Em caso de erro, um objeto JSON com uma chave "message" descrevendo o erro ocorrido.
        /// </returns>
        [Route("")]
        [Authorize]
        [HttpPost]
        public async Task<HttpResponseMessage> Get()
        {
            try
            {
                var diretorias = await _context.ILA_VW_ESTRUTURA_ORG.Where(os => os.FL_ATIVO == 1 && os.NR_NIVEL == 1)
                    .Select(os => os.DIR_SIGLA)
                    .Distinct()
                    .ToListAsync();
                var gerencias = await _context.ILA_VW_ESTRUTURA_ORG.Where(os => os.FL_ATIVO == 1 && os.NR_NIVEL == 3)
                    .Select(os => os.GER_SIGLA)
                    .Distinct()
                    .ToListAsync();
                var deptos = await _context.ILA_VW_ESTRUTURA_ORG.Where(os => os.FL_ATIVO == 1 && os.NR_NIVEL == 4)
                    .Select(os => os.DEP_SIGLA)
                    .Distinct()
                    .ToListAsync();

                return Request.CreateResponse(HttpStatusCode.OK, new { diretorias, gerencias, deptos });
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                return Request.CreateResponse(HttpStatusCode.InternalServerError,
                    new { message = "Algo deu errado no servidor. Reporte ao suporte técnico." });
            }
        }
    }
}