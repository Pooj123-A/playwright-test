
import { test, expect } from "@playwright/experimental-ct-react";
import App1722 from "../example/App1722.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1722 />);
  await expect(component).toContainText("Learn React");
});
