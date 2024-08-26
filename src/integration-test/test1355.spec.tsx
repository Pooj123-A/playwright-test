
import { test, expect } from "@playwright/experimental-ct-react";
import App1355 from "../example/App1355.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1355 />);
  await expect(component).toContainText("Learn React");
});
