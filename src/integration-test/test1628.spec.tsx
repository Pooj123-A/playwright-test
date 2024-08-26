
import { test, expect } from "@playwright/experimental-ct-react";
import App1628 from "../example/App1628.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1628 />);
  await expect(component).toContainText("Learn React");
});
