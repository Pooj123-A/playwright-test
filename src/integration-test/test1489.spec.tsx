
import { test, expect } from "@playwright/experimental-ct-react";
import App1489 from "../example/App1489.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1489 />);
  await expect(component).toContainText("Learn React");
});
