
import { test, expect } from "@playwright/experimental-ct-react";
import App1622 from "../example/App1622.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1622 />);
  await expect(component).toContainText("Learn React");
});
