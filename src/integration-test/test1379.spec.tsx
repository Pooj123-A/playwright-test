
import { test, expect } from "@playwright/experimental-ct-react";
import App1379 from "../example/App1379.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1379 />);
  await expect(component).toContainText("Learn React");
});
