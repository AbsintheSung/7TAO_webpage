    //頭
      function headerImg(imgurl){
        let img = new Image();
        img.src = imgurl
        img.alt = "活動圖片"
        return img
      }
      function heraderTime(time){
        let h_title = document.createElement('h2')
        h_title.classList.add('yeseva-tc-one',"fs-48","mb-12","border-bottom","border-dark","border-3")
        h_title.textContent = time
        return h_title
      }
      function cardHeader(time,imgUrl){
        let card_header = document.createElement('div')
        let img = headerImg(imgUrl);
        let h_time = heraderTime(time);
        card_header.classList.add('list-card__header')
        card_header.appendChild(h_time)
        card_header.appendChild(img)
        return card_header
      }
      //身體
      function bodyTitle(title){
        let h_title = document.createElement('h3')
        h_title.classList.add('noto-tc-serif','fs-4','fw-bold','mb-12')
        h_title.textContent = title
        return h_title
      }
      function bodyContent(content){
        let p_content = document.createElement('p')
        p_content.classList.add("noto-tc-serif")
        p_content.textContent = content
        return p_content
      }
      function cardBody(title,content){
        let card_body = document.createElement('div')
        let body_title =  bodyTitle(title);
        let body_content = bodyContent(content);
        card_body.classList.add("list-card__body" ,"mt-12")
        card_body.appendChild(body_title)
        card_body.appendChild(body_content)
        return card_body
      }
      //底部
      function footerLinkType(type,a_link){
        let link = document.createElement('a')
        let span = document.createElement('span')
        let img = new Image();
        link.href=a_link
        link.classList.add('text-dark')
        img.alt = '活動Icon'
        img.src="../assets/images/sparkler.png"
        img.classList.add('card-icon')
        span.classList.add("noto-tc-serif","fw-bold","ms-1")
        span.textContent = type
        link.appendChild(img)
        link.appendChild(span)
        return link
      }
      function footerLinkStatus(status,a_link){
        let link = document.createElement('a')
        let span = document.createElement('span')
        let i = document.createElement('i')
        link.href= a_link
        link.classList.add('text-dark')
        span.classList.add("noto-tc-serif","fw-bold","me-1")
        span.textContent = status
        i.classList.add('icofont-rounded-double-right')
        link.appendChild(span)
        link.appendChild(i)
        return link
      }
      function cardFooter(type,status,a_type,a_status){
        let card_footer = document.createElement('div')
        let linkType = footerLinkType(type,a_type)
        let linkStatus = footerLinkStatus(status,a_status)
        card_footer.classList.add('list-card__footer',"border-top","border-bottom","border-dark","border-2","mt-3","py-12")
        card_footer.appendChild(linkType)
        card_footer.appendChild(linkStatus)
        return card_footer
      }


      function createCard(obj){
        let list_card = document.createElement('div')
        let header = cardHeader(obj.time,obj.imgUrl)
        let body = cardBody(obj.title,obj.content)
        let footer = cardFooter(obj.type,obj.status,obj.typeLink,obj.statusLink)
       
        list_card.classList.add('list-card')

        list_card.appendChild(header)
        list_card.appendChild(body)
        list_card.appendChild(footer)
        return list_card
        
      }
      function mountCard(obj,mountDom){
        let li = document.createElement('li')
        let card = createCard(obj)
        li.classList.add('col-lg-4','col-md-6','col-12')
        li.appendChild(card)
        return mountDom.appendChild(li)
      }

export default { 
    mountCard , 
    // createCard,
    // headerImg,
    // heraderTime,
    // cardHeader,
    // bodyTitle,
    // bodyContent,
    // cardBody,
    // footerLinkType,
    // footerLinkStatus,
    // cardFooter
}

