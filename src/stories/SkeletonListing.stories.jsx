import SkeletonListing from "../views/SkeletonListing";

export default {
    title: "SkeletonListing",
    component: SkeletonListing,
    argTypes: {
        perPage: { control: { type: 'number', min:1 }}
    },
    render: ({ ...args }) => (
        <SkeletonListing {...args}/>
      )
    
}
export const Default = {
    args: {
        perPage: 20
    }
  };