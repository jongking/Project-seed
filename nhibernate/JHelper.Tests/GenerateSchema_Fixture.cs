﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Domain.Model;
using JHelper;
using NHibernate.Cfg;
using NHibernate.Tool.hbm2ddl;
using NUnit.Framework;

namespace JHelper.Tests
{
    [TestFixture]
    public class GenerateSchema_Fixture
    {
        [Test]
        public void Can_generate_schema()
        {
            var cfg = new Configuration();
            cfg.Configure();
            cfg.AddAssembly(typeof(Product).Assembly);

            new SchemaExport(cfg).Execute(true, true, true);
        }
    }
}
