
import { test, expect } from "@playwright/experimental-ct-react";
import App1172 from "./App1172.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1172 />);
  await expect(component).toContainText("Learn React");
});
