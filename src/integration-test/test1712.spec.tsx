
import { test, expect } from "@playwright/experimental-ct-react";
import App1712 from "../example/App1712.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1712 />);
  await expect(component).toContainText("Learn React");
});
