
import { test, expect } from "@playwright/experimental-ct-react";
import App1083 from "./App1083.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1083 />);
  await expect(component).toContainText("Learn React");
});
