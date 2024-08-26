
import { test, expect } from "@playwright/experimental-ct-react";
import App1581 from "../example/App1581.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1581 />);
  await expect(component).toContainText("Learn React");
});
