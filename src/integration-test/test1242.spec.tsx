
import { test, expect } from "@playwright/experimental-ct-react";
import App1242 from "../example/App1242.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1242 />);
  await expect(component).toContainText("Learn React");
});
