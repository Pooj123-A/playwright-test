
import { test, expect } from "@playwright/experimental-ct-react";
import App1540 from "../example/App1540.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1540 />);
  await expect(component).toContainText("Learn React");
});
