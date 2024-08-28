
import { test, expect } from "@playwright/experimental-ct-react";
import App1939 from "./App1939.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1939 />);
  await expect(component).toContainText("Learn React");
});
