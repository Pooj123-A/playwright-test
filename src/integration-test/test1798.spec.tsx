
import { test, expect } from "@playwright/experimental-ct-react";
import App1798 from "../example/App1798.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1798 />);
  await expect(component).toContainText("Learn React");
});
