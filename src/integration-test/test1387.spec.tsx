
import { test, expect } from "@playwright/experimental-ct-react";
import App1387 from "../example/App1387.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1387 />);
  await expect(component).toContainText("Learn React");
});
