export default {
    title: "Custom/My Web Components Button",
    argTypes: { clickHandler: { action: "Clicked the button!" } },
}

const Template = (args) => {
    const macButton = document.createElement("wc-button");

    macButton.innerHTML = args.text;
    macButton.onclick = args.clickHandler;

    return macButton;
}

export const WCButton = Template.bind({});
WCButton.args = {
    text: "Web Component Button",
}