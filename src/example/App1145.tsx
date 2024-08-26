
import { test, expect } from "@playwright/experimental-ct-react";
import App1145 from "./App1145.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1145 />);
  await expect(component).toContainText("Learn React");
});
