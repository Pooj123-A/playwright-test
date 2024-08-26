
import { test, expect } from "@playwright/experimental-ct-react";
import App1607 from "../example/App1607.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1607 />);
  await expect(component).toContainText("Learn React");
});
