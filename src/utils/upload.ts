import type { UploadProps } from "ant-design-vue";
import { message } from "ant-design-vue/es";

export const beforeImageUpload = (file: UploadProps["fileList"][number]) => {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png"
  if (!isJpgOrPng) {
    message.error("只能上传JGP和PNG")
  }
  const isLt2M = file.size / 1024 / 1024 < 2
  if (!isLt2M) {
    message.error("图片大小不能超过2MB")
  }
  // if (file.size / 1024 < 5) {
  //   // 小于该值就插入 base64 格式（而不上传），默认为 5kb
  //   getBase64(file.originFileObj, (base64Url: string) => {
  //     console.log(base64Url)
  //     store.setCoverImage(base64Url)
  //   })
  //   return
  // }
  console.log("文件大小：" + file.size)
  return isJpgOrPng && isLt2M
}

export function getBase64(img: Blob, callback: (base64Url: string) => void) {
  const reader = new FileReader()
  reader.addEventListener("load", () => callback(reader.result as string))
  reader.readAsDataURL(img)
}
