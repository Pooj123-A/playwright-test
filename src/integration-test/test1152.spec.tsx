
import { test, expect } from "@playwright/experimental-ct-react";
import App1152 from "../example/App1152.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1152 />);
  await expect(component).toContainText("Learn React");
});
