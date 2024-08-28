
import { test, expect } from "@playwright/experimental-ct-react";
import App1986 from "./App1986.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1986 />);
  await expect(component).toContainText("Learn React");
});
