
import { test, expect } from "@playwright/experimental-ct-react";
import App1777 from "../example/App1777.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1777 />);
  await expect(component).toContainText("Learn React");
});
