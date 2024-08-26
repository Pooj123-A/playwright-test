
import { test, expect } from "@playwright/experimental-ct-react";
import App1035 from "../example/App1035.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1035 />);
  await expect(component).toContainText("Learn React");
});
