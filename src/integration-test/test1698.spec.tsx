
import { test, expect } from "@playwright/experimental-ct-react";
import App1698 from "../example/App1698.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1698 />);
  await expect(component).toContainText("Learn React");
});
