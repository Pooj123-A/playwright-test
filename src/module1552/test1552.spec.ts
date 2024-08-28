
import { test, expect } from "@playwright/experimental-ct-react";
import App1552 from "./App1552.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1552 />);
  await expect(component).toContainText("Learn React");
});
