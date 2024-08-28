
import { test, expect } from "@playwright/experimental-ct-react";
import App1566 from "./App1566.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1566 />);
  await expect(component).toContainText("Learn React");
});
