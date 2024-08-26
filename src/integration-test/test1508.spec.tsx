
import { test, expect } from "@playwright/experimental-ct-react";
import App1508 from "../example/App1508.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1508 />);
  await expect(component).toContainText("Learn React");
});
