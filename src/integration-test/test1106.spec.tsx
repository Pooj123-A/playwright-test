
import { test, expect } from "@playwright/experimental-ct-react";
import App1106 from "../example/App1106.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1106 />);
  await expect(component).toContainText("Learn React");
});
