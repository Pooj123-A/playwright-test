
import { test, expect } from "@playwright/experimental-ct-react";
import App1428 from "../example/App1428.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1428 />);
  await expect(component).toContainText("Learn React");
});
