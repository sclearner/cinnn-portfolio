import React from "react";

function _ContactCard(_props, ref) {
    return <div ref={ref} className="flex flex-col gap-10 p-[30px] rounded-[15px] md:min-w-[514px] sm:min-w-full bg-[white] h-fit grow">
        <div className="font-bold">
            <p className="text-sm">Số điện thoại</p>
            <h4 className="text-xl">0374 988 593</h4>
        </div>
        <div>
            <p><b>Địa chỉ: </b>Hoài Đức, Hà Nội</p>
            <p><b>Email: </b>quynh1234nq@gmail.com</p>
            <p><b>Giờ làm việc: </b>8:00-17:00 thứ 2-6</p>
        </div>
    </div>
} 

export const ContactCard = React.forwardRef(_ContactCard);