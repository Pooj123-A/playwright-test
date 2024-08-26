
import { test, expect } from "@playwright/experimental-ct-react";
import App1357 from "../example/App1357.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1357 />);
  await expect(component).toContainText("Learn React");
});
