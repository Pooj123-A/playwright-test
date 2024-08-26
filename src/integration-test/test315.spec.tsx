
import { test, expect } from "@playwright/experimental-ct-react";
import App315 from "../example/App315.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App315 />);
  await expect(component).toContainText("Learn React");
});
