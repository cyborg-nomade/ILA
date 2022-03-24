﻿using System;
using System.Collections.Generic;
using CPTM.ILA.Web.Models.AccessControl;
using CPTM.ILA.Web.Models.Messaging;

namespace CPTM.ILA.Web.Models.ChangeLogging
{
    public class ChangeLog
    {
        public int Id { get; set; }
        public User User { get; set; }
        public Case Case { get; set; }
        public DateTime ChangeDate { get; set; }
        public ICollection<ItemIdentity> Items { get; set; }
    }
}