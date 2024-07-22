import React from "react";
import { MaterialButton } from "~/views/components/button";

function _ContactForm({card}, _ref) {
  return (
    <form className="flex flex-col gap-[15px] grow">
      <div className="flex flex-col gap-[15px]" style={{minHeight: `${card.current.offsetHeight}px`}}> 
      <div className="flex gap-[15px]">
        <input className="grow" type="text" placeholder="Tên*" name="name" />
        <input className="grow" type="email" placeholder="Địa chỉ email*" name="email"/>
      </div>
      <input type="text" placeholder="Tôi có thể giúp bạn việc gì?" name="subject"/>
      <ContactBody/>
      </div>
      <div className="flex gap-[15px]">
        <input type="checkbox" name="isSubmit"/>
        <p>
          Bạn đồng ý với <a className="p-0 m-0">Điều khoản & Chính sách</a>
        </p>
      </div>
      <MaterialButton className="w-fit" mode="secondary">Yêu cầu ngay</MaterialButton>
    </form>
  );
}

function ContactBody() {
    const body = React.useRef();

    React.useLayoutEffect(() => {
        const updateHeight = (e) => {
            body.current.style.height = body.current.scrollHeight + 'px';
        }
        body.current.addEventListener("input", updateHeight);
        return () => {
            body.current.removeEventListener("input", updateHeight);    
        }
    }, [])

    return <textarea className="grow" ref={body} placeholder="Mô tả chi tiết" name="body"/>
}

export const ContactForm = React.forwardRef(_ContactForm);