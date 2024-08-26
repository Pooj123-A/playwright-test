
import { test, expect } from "@playwright/experimental-ct-react";
import App1531 from "../example/App1531.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1531 />);
  await expect(component).toContainText("Learn React");
});
