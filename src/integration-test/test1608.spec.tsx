
import { test, expect } from "@playwright/experimental-ct-react";
import App1608 from "../example/App1608.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1608 />);
  await expect(component).toContainText("Learn React");
});
