
import { test, expect } from "@playwright/experimental-ct-react";
import App1736 from "../example/App1736.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1736 />);
  await expect(component).toContainText("Learn React");
});
