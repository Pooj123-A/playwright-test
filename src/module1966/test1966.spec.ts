
import { test, expect } from "@playwright/experimental-ct-react";
import App1966 from "./App1966.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1966 />);
  await expect(component).toContainText("Learn React");
});
