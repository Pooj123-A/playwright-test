
import { test, expect } from "@playwright/experimental-ct-react";
import App1680 from "../example/App1680.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1680 />);
  await expect(component).toContainText("Learn React");
});
