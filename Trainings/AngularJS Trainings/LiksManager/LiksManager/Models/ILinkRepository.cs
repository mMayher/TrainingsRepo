using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LinksManager.Models
{
    interface ILinkRepository
    {
        List<LinkEntity> GetAll();
        int InsertLink(LinkEntity link);

    }
}
