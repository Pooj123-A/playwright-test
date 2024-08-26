
import { test, expect } from "@playwright/experimental-ct-react";
import App1285 from "../example/App1285.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1285 />);
  await expect(component).toContainText("Learn React");
});
