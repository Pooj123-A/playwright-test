
import { test, expect } from "@playwright/experimental-ct-react";
import App1686 from "../example/App1686.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1686 />);
  await expect(component).toContainText("Learn React");
});
