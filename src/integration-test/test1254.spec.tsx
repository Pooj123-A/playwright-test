
import { test, expect } from "@playwright/experimental-ct-react";
import App1254 from "../example/App1254.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1254 />);
  await expect(component).toContainText("Learn React");
});
