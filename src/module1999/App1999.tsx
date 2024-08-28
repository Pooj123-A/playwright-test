
import { test, expect } from "@playwright/experimental-ct-react";
import App1999 from "./App1999.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1999 />);
  await expect(component).toContainText("Learn React");
});
