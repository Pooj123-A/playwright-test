
import { test, expect } from "@playwright/experimental-ct-react";
import App1411 from "../example/App1411.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1411 />);
  await expect(component).toContainText("Learn React");
});
