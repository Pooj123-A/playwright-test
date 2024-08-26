
import { test, expect } from "@playwright/experimental-ct-react";
import App1759 from "../example/App1759.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1759 />);
  await expect(component).toContainText("Learn React");
});
