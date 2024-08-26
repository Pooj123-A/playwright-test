
import { test, expect } from "@playwright/experimental-ct-react";
import App1195 from "../example/App1195.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1195 />);
  await expect(component).toContainText("Learn React");
});
