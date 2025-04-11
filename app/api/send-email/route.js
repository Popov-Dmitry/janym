import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const startOfEmail = (number) => `
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
          <html dir="ltr" lang="en">
            <head>
              <link rel="preload" as="image" href="https://www.janym.com/janum.png" />
              <meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />
              <meta name="x-apple-disable-message-reformatting" />
              <!--$-->
            </head>
            <body style='font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;background-color:#ffffff'>
              <table
                align="center"
                width="100%"
                border="0"
                cellpadding="0"
                cellspacing="0"
                role="presentation"
                style="max-width:100%;margin:0 auto;padding:20px 0 48px;width:660px">
                <tbody>
                  <tr style="width:100%">
                    <td>
                      <table
                        align="center"
                        width="100%"
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                        role="presentation">
                        <tbody>
                          <tr>
                            <td>
                              <table
                                align="center"
                                width="100%"
                                border="0"
                                cellpadding="0"
                                cellspacing="0"
                                role="presentation">
                                <tbody style="width:100%">
                                  <tr style="width:100%">
                                    <td style="width:100%; text-align: center;" data-id="__react-email-column">
                                      <img
                                        alt="Janym Logo"
                                        height="28"
                                        src="https://www.janym.com/janum.png"
                                        style="display:block;outline:none;border:none;text-decoration:none"
                                        width="76" />
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <table
                        align="center"
                        width="100%"
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                        role="presentation"
                        style="border-collapse:collapse;border-spacing:0px;color:rgb(51,51,51);border-radius:3px;font-size:12px;margin:30px 0 15px 0;height:24px">
                        <tbody>
                          <tr>
                            <td>
                              <p
                                style="font-size:24px;line-height:24px;margin-bottom:16px;margin-top:16px;font-weight:500;margin:0">
                                We've got your order and will contact you soon.
                              </p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <table
                        align="center"
                        width="100%"
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                        role="presentation"
                        style="border-collapse:collapse;border-spacing:0px;color:rgb(51,51,51);border-radius:3px;font-size:12px;margin:30px 0 15px 0;height:24px">
                        <tbody>
                          <tr>
                            <td>
                              <p
                                style="font-size:16px;line-height:24px;margin-bottom:24px;font-weight:400;margin:0">
                                We will call you on this number as you provided: ${number}
                              </p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <table
                        align="center"
                        width="100%"
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                        role="presentation"
                        style="border-collapse:collapse;border-spacing:0px;color:rgb(51,51,51);background-color:rgb(250,250,250);border-radius:3px;font-size:12px;margin:30px 0 15px 0;height:24px">
                        <tbody>
                          <tr>
                            <td>
                              <p
                                style="font-size:14px;line-height:24px;margin-bottom:16px;margin-top:16px;background:#fafafa;padding-left:10px;font-weight:500;margin:0">
                                Order Details
                              </p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <table
                        align="center"
                        width="100%"
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                        role="presentation">
                        <tbody>
`;

const endOfEmail = `
                </tbody>
              </table>
              <hr style="width:100%;border:none;border-top:1px solid #eaeaea;margin:0 0 24px 0" />
              <p
                style="font-size:12px;line-height:24px;margin-bottom:16px;margin-top:16px;margin:25px 0 0 0;text-align:center;color:rgb(102,102,102)">
                © 2025 Janym. <br />
              </p>
            </td>
          </tr>
        </tbody>
      </table>
      <!--/$-->
    </body>
  </html>
`;

const items = (items) => {
  return items.map((item) => {
    return `
      <tr>
        <td>
          <table
            align="center"
            width="100%"
            border="0"
            cellpadding="0"
            cellspacing="0"
            role="presentation">
            <tbody style="width:100%">
              <tr style="width:100%">
                <td data-id="__react-email-column" style="width:64px">
                  <img
                    height="64"
                    src="${item.cover}"
                    style="display:block;outline:none;border:1px solid rgba(128,128,128,0.2);text-decoration:none;margin:0 0 0 0px;border-radius:0"
                    width="64" />
                </td>
                <td
                  data-id="__react-email-column"
                  style="padding-left:22px">
                  <p
                    style="font-size:12px;line-height:1.4;margin-bottom:16px;margin-top:16px;font-weight:400;margin:0;padding:0">
                    <b>Name:</b> ${item.title}
                  </p>
                  <p
                    style="font-size:12px;line-height:1.4;margin-bottom:16px;margin-top:16px;font-weight:400;margin:0;padding:0">
                    <b>Size:</b> ${item.size}
                  </p>
                  <p
                    style="font-size:12px;line-height:1.4;margin-bottom:16px;margin-top:16px;font-weight:400;margin:0;padding:0">
                    <b>Material:</b> ${item.material}
                  </p>
                </td>
                <td
                  align="right"
                  data-id="__react-email-column"
                  style="display:table-cell;padding:0px 0 0px 0px;width:100px;vertical-align:top">
                  <p
                    style="font-size:12px;line-height:24px;margin-bottom:16px;margin-top:16px;font-weight:600;margin:0">
                    $${item.price}
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>`;
  });
};

const totalPrice = (items) => {
  return items.reduce((acc, item) => acc + item.price, 0);
};

const totalEmail = (items) => {
  return `
    <hr
      style="width:100%;border:none;border-top:1px solid #eaeaea;margin:30px 0 0 0" />
    <table
      align="right"
      width="100%"
      border="0"
      cellpadding="0"
      cellspacing="0"
      role="presentation">
      <tbody>
        <tr>
          <td>
            <table
              align="center"
              width="100%"
              border="0"
              cellpadding="0"
              cellspacing="0"
              role="presentation">
              <tbody style="width:100%">
                <tr style="width:100%">
                  <td
                    align="right"
                    data-id="__react-email-column"
                    style="display:table-cell">
                    <p
                      style="font-size:10px;line-height:24px;margin-bottom:16px;margin-top:16px;margin:0;color:rgb(102,102,102);font-weight:600;padding:0px 30px 0px 0px;text-align:right">
                      TOTAL
                    </p>
                  </td>
                  <td
                    data-id="__react-email-column"
                    style="height:48px;border-left:1px solid;border-color:rgb(238,238,238)"></td>
                  <td
                    data-id="__react-email-column"
                    style="display:table-cell;width:90px">
                    <p
                      style="font-size:16px;line-height:24px;margin-bottom:16px;margin-top:16px;margin:0px 0px 0px 0px;font-weight:600;white-space:nowrap;text-align:right">
                      $${totalPrice(items)}
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  `;
};

export async function POST(req) {
  try {
    const { email, name, number, message } = await req.json();

    const response = await resend.emails.send({
      from: "noreply@janym.com",
      to: email,
      bcc: "info@janym.com",
      subject: `${name} – Order on janym.com`,
      html: `
        ${startOfEmail(number)}
        ${items(message)}
        ${totalEmail(message)}
        ${endOfEmail}
      `
    });

    return Response.json({ success: true, data: response });
  } catch (error) {
    return Response.json({ success: false, error: error.message });
  }
}
