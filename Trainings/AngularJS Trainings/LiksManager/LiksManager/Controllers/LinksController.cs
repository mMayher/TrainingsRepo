using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using LinksManager.Models;
using System.Configuration;

namespace LiksManager.Controllers
{
    public class LinksController : Controller
    {
        ILinkRepository _sqlLinkRepo;

        public LinksController()
        {
            this._sqlLinkRepo = new SqlLinRepository(ConfigurationManager.ConnectionStrings["LinkStorageConnection"].ConnectionString);        
        }
        // GET: Links
        [HttpGet]
        public ActionResult Index()
        {
            var links = this._sqlLinkRepo.GetAll();
            return View(links);
        }
        [HttpPost]
        public ActionResult InsertLink(string linkName, string URL)
        {
            var linksBefore = this._sqlLinkRepo.GetAll();
            int result = this._sqlLinkRepo.InsertLink(new LinkEntity
            {
                Name = linkName,
                Url = URL
            });
            var linksAfter = this._sqlLinkRepo.GetAll();
            if (result > 0)
            {
                return View("Index", linksAfter);
            }
            else
            {
                return View("Index", linksBefore);
            }
        }
        
    }
}