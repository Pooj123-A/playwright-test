
import { test, expect } from "@playwright/experimental-ct-react";
import App1639 from "../example/App1639.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1639 />);
  await expect(component).toContainText("Learn React");
});
